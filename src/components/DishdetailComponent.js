import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{

    renderDish(dish) {
        if(dish ==null)
            return (<div></div>);
        else
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }

    renderComments(comments){
        if (comments != null){
                const cm = comments.map((comment) => {
                    return(
                        <li key={comment.id}>
                            <div>{comment.comment}</div>
                            <div>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}`}</div>
                        </li>
                    )
                });

            return(
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className ='list-unstyled'>
                        {cm}
                    </ul>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

    render(){
        const dish = this.props.dish;
        if(dish==null)
            return (
                <div></div>
            )
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;