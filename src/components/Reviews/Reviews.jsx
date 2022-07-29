import { ThreeDots } from 'react-loader-spinner';
import { ReviewsSection, ReviewsName, ReviewsText } from './Reviews.styled';
import { useFetchInfo } from 'hooks/useFetch';

const Reviews = () => {
  const { data, loading } = useFetchInfo('reviews');
  if (!data.results) {
    return;
  }
  const reviews = data.results;
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
