import { request } from 'graphql-request';

//request query
const QAS = ` {  
  qas {
    id
    name
    items {
      id
      question
      answer
    }
  }
 }`;

export async function getServerSideProps() {
  //'request' from ‘graphql-request’ library
  const res = await request(
    'https://editools-bibo-homework-4g6paft7cq-de.a.run.app/api/graphql',
    QAS
  );
  const data = res.qas;

  return {
    props: {
      data, //Pass Data in props
    },
  };
}

const Qa = ({ data }) => {
  const qas = data[0];
  // console.log(qas.items);

  return (
    <>
      <h1>{qas.name}</h1>
      <div>
        {qas.items.map((item) => {
          return (
            <div key={item.id}>
              <h2>question:{item.question}</h2>
              <h2>answer:{item.answer}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Qa;
