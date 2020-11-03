import React from 'react';
import axios from "axios";

export default class Wrestling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isLoading: true,
            errors: null
        };
        this.getAllWrestling = this.getAllWrestling.bind(this);
    }

    getAllWrestling = (e) => {
        axios
            .get(`https://newsapi.org/v2/everything?q=ncaa+wrestling&apiKey=4418706137bb4eac83503f80399fcfc5`)
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
        this.getAllWrestling();
    }
    render() {
        const { isLoading, articles } = this.state;
        return <React.Fragment>
            <h1>Wrestling News</h1>
            <div className="article">
                {!isLoading ? (
                    articles.map(article => {
                        const { date, title, url, image, source, description } = article;
                        return (
                            <a key={title} href={url}>
                                <div className="article-container">
                                    {article.image !== 'null' ?
                                        <img className="article-image" src={image} alt={title} />
                                        :
                                        <img className="article-image" src='https://i.ibb.co/RvVv7Dt/2.png' alt="no image" />

                                    }
                                                                        <div className="source-date-container">
                                        <div className="source-div">
                                        <p className="article-source">{source}</p>
                                        </div>
                                        <div>
                                        <p className="article-date">{date}</p>
                                        </div>
                                    </div>
                                    <p className="article-title">{title}</p>
                                    <p className="article-description">{description}</p>
                                </div>
                            </a>
                        );
                    })
                ) : (
                        <p>Loading...</p>
                    )}
            </div>
        </React.Fragment>

    }
}

