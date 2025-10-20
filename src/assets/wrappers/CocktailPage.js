import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 50px;

  header {
    text-align: center;
    margin-bottom: 4rem;
    .btn {
      margin-bottom: 1rem;
    }
  }

  .img {
    border-radius: var(--borderRadius);
  }

  .drink-info {
    padding-top: 3rem;
    margin-top: 9rem;
  }

  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }

  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
  @media (min-width: 400px) {
    div {
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;

      align-items: start;
    }
    .btn-details {
      margin-top: 140px;
      padding: 10px;
    }
    .img {
    }
    .drink-info {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
