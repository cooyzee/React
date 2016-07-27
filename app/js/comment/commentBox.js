import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

export default class CommentBox extends React.Component{
    constructor(){
        super();
        this.state = {
            url:'comments.json',
            data: []
        };
        this.getComments = this.getComments.bind(this);
    }

    getComments(){
        $.ajax({
            url: this.state.url,
            dataType: 'json',
            cache: false,
            success: (data) => this.setState({data:data}),
            error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
        });
    }

    updateComments(comment){
        let comments = this.state.data;
        comment.id = Date.now();
        // [comments] = [[...comments,comment]];
        // comments = comments.concat([comment]);
        comments.push(comment);
        this.setState({data:comments})
    }

    componentDidMount(){
        this.getComments();
        // setInterval(this.getComments,this.props.pollInterval)
    }

    render(){
        return(
            <div class="commentBox">
                <h2>Comments</h2>
                <CommentList data={this.state.data}/>
                <hr/>
                <CommentForm onCommentSubmit={this.updateComments.bind(this)}/>
            </div>
        )
    }
}

class Comment extends React.Component{
    render(){
        return(
            <div className="comment">
                <h3 className="commentAuthor">
                    <Link to={"/list/"+this.props.id}>{this.props.author}</Link>
                </h3>
                {this.props.children}
            </div>
        )
    }
}

class CommentList extends React.Component{
    render(){
        return(
            <div class="commentList">
                {
                    this.props.data.map((c) => {
                        return <Comment author={c.author} key={c.id} id={c.id}>{c.text}</Comment>
                    })
                }
            </div>
        )
    }
}

class CommentForm extends React.Component{
    constructor(){
        super();
        this.state = {
            author: '',
            text: ''
        }
    }

    handleAuthorChange(e){
        this.setState({author: e.target.value});
    }

    handleTextChange(e){
        this.setState({text: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if(author && text) {
            this.props.onCommentSubmit({author: author, text: text});
        }else{
            return;
        }
    }

    render(){
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="You name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange.bind(this)}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <input type="submit" value="Post"/>
            </form>
        )
    }
}
