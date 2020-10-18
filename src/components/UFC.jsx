import React from 'react';
import axios from "axios";

export default class UFC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isLoading: true,
            errors: null
        };
        this.getAllUfc = this.getAllUfc.bind(this);
    }

    getAllUfc = (e) => {
        axios
            .get(`https://newsapi.org/v2/everything?q=ufc&apiKey=4418706137bb4eac83503f80399fcfc5`)
            .then(response =>
                response.data.articles.map(article => ({
                    image: `${article.urlToImage}`,
                    date: `${article.publishedAt}`,
                    title: `${article.title}`,
                    url: `${article.url}`,
                    source: `${article.source.name}`
                }))
            )
            .then(articles => {
                this.setState({
                    articles,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
        this.getAllUfc();
    }
    render() {
        const { isLoading, articles } = this.state;
        return <React.Fragment>
            <h1>UFC</h1>
            <div>
                {!isLoading ? (
                    articles.map(article => {
                        const { date, title, url, image, source} = article;
                        if(image == null){
                            image = ``
                        }
                        return (
                            <a href={url}><div key={title}>
                                <img src={image} alt={title}/>
                                <p>{date}</p>
                                <p>{title}</p>
                                <p>{source}</p>
                            </div></a>
                        );
                    })
                ) : (
                        <p>Loading...</p>
                    )}
            </div>
        </React.Fragment>

    }
}

