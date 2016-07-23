import React from 'react';
// import $ from 'jquery';

class CommentBox extends React.Component{
    constructor(){
        super();
        this.state = {
            url:'app/comments.json',
            data: []
        };
        this.getComments = this.getComments.bind(this);
    }

    getComments(){
        // $.ajax({
        //     url: this.state.url,
        //     dataType: 'json',
        //     cache: false,
        //     success: (data) => this.setState({data:data}),
        //     error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
        // });
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
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.updateComments.bind(this)}/>
            </div>
        )
    }
}

class Comment extends React.Component{
    render(){
        return(
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
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
                        return <Comment author={c.author} key={c.id}>{c.text}</Comment>
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

export default CommentBox;
