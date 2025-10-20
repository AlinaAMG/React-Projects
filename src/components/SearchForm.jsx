import Wrapper from '../assets/wrappers/SearchForm';
import { Form, useNavigation } from 'react-router-dom';

const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.status === 'submitting';

  return (
    <Wrapper>
      <Form className="form" style={{ marginBottom: 0 }}>
        <input
          className="form-input"
          type="search"
          name="search"
          defaultValue={searchTerm}
        />
        <button
          className="btn"
          type="submit"
          classname="btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
