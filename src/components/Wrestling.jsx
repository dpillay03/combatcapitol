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
            <h1>Wrestling</h1>
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
                                        <img src='"https://i.ibb.co/444KpWN/3.png"' alt="no image" />

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

