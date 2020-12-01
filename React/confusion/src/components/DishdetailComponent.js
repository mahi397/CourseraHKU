import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    //ASSIGNMENT 1 TASK 2
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    //ASSIGNMENT 1 TASK 3
    renderComments(comments) {

        if (comments != null) {

            let list = comments.map((comment)=>{

                return(
                    <li key={comment.id}>
                        <div>
                            <p>{comment.comment}</p>
                            <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    </li>

                )
            })

            return(
                    <div>
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {list}
                        </ul>
                    </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }

        
    }

    //ASSIGNMENT 1 TASK 1
    render() {

            
            // const dish = this.props.selectedDish;
            // return (
            //     <div className="row">
            //         <div className="col-12 col-md-5 m-1">
            //             <Card onClick = {this.renderDish(dish)}> 
            //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
            //                 <CardImgOverlay>
            //                     <CardTitle>{dish.name}</CardTitle>
            //                 </CardImgOverlay>
            //             </Card>
            //         </div>
            //         <div className="col-12 col-md-5 m-1">
            //         {this.renderComments(dish.comments)}
            //         </div>
            //     </div>
                

                
            // );

        if (this.props.dish != null) {
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>

                    <div  className="col-12 col-md-5 m-1">              
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
                
            );
        } else { 
            return(
                <div></div>
            );
        }


        }

        
    }


export default Dishdetail;