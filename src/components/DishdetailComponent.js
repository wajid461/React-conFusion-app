import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div class="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }

        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        
        if (dish != null) {
        
            const allcomment = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                    <ul class="list-unstyled">
                        <li>{comment.comment}</li>
                        <li> -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                    </div>
                );
            });

            return(
                <div class="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <p>{allcomment}</p>
                </div>
            );
        }
        
        
        else {
            return(
                <div></div>
            );
        }
    }

    render() {

        return (
            <div class="container">
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
