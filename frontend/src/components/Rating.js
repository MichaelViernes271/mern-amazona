function Rating(props) {
    const { rating, numReviews } = props;
    return (
        <div className="rating">
            <span>
                <i
                    className={
                        rating >= 1
                            ? 'fa fa-star rating-color'
                            : rating >= 0.5
                                ? 'fa fa-star-half-alt'
                                : 'far fa-star'
                    }
                />

            </span>
            <span>
                <i
                    className={
                        rating >= 2
                            ? 'fa fa-star rating-color'
                            : rating >= 0.5
                                ? 'fa fa-star-half-alt'
                                : 'far fa-star'
                    }
                />

            </span>
            <span>
                <i
                    className={
                        rating >= 3
                            ? 'fa fa-star rating-color'
                            : rating >= 0.5
                                ? 'fa fa-star-half-alt'
                                : 'far fa-star'
                    }
                />

            </span>
            <span>
                <i
                    className={
                        rating >= 4
                            ? 'fa fa-star rating-color'
                            : rating >= 0.5
                                ? 'fa fa-star-half-alt'
                                : 'far fa-star'
                    }
                />

            </span>
            <span>
                <i
                    className={
                        rating >= 5
                            ? 'fa fa-star rating-color'
                            : rating >= 0.5
                                ? 'fa fa-star-half-alt'
                                : 'far fa-star'
                    }
                />

            </span>
            <b><span> {numReviews} review/s</span></b>
        </div>
    );
}

export default Rating;