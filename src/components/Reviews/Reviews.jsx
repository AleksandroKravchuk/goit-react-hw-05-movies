import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import { fetchMovieReviews } from 'API/api';
import { ReviewsSection, ReviewsName, ReviewsText } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setLoading(true);
    fetchMovieReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(error => Notify.failure('Ooooops somthing went wrong'))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <ReviewsSection>
      {loading && <ThreeDots color="#00BFFF" height={60} width={60} />}
      {reviews.length !== 0 ? (
        <>
          <ReviewsName>Author: {reviews[0].author}</ReviewsName>
          <ReviewsText>{reviews[0].content}</ReviewsText>
        </>
      ) : (
        <ReviewsText>We dont have any reviews for this movie</ReviewsText>
      )}
    </ReviewsSection>
  );
};
export default Reviews;
