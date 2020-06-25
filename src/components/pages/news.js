import React, { Component } from 'react';
import NewsCard from '../NewsCard';
import {InfoConsumer} from '../context';
class News extends Component{

    render(){

        return(
            <InfoConsumer>
                {
                    value=>{
                        return value.news.map(person=>{
                            return <NewsCard key={person.id} item={person}></NewsCard>
                        });
                    }
                }
            </InfoConsumer>
        );
    }
}

export default News;