import React from 'react';
import axios from "axios";

export default class MuayThai extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isLoading: true,
            errors: null
        };
        this.getAllMuayThai = this.getAllMuayThai.bind(this);
    }

    getAllMuayThai = (e) => {
        axios
            .get(`https://newsapi.org/v2/everything?q=muay+thai&apiKey=4418706137bb4eac83503f80399fcfc5`)
            .then(response =>
                response.data.articles.map(article => ({
                    image: `${article.urlToImage}`,
                    date: `${article.publishedAt}`,
                    title: `${article.title}`,
                    url: `${article.url}`,
                    source: `${article.source.name}`,
                    description: `${article.description}`
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
        this.getAllMuayThai();
    }
    render() {
        const { isLoading, articles } = this.state;
        return <React.Fragment>
            <h1>Muay Thai</h1>
            <div>
                {!isLoading ? (
                    articles.map(article => {
                        const { date, title, url, image, source, description } = article;
                        return (
                            <a key={title} href={url}>
                                <div>
                                    {article.image !== 'null' ?
                                        <img src={image} alt={title} />
                                        :
                                        <img src='https://i.ibb.co/t41sSB9/6.png' alt="no image" />

                                    }
                                    <p>{date}</p>
                                    <p>{title}</p>
                                    <p>{description}</p>
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

