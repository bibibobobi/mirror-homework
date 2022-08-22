import { useState } from 'react';
import { request } from 'graphql-request';

import { FiPlus, FiMinus } from 'react-icons/fi';

import styles from '../styles/qa.module.css';

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

  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      //If clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className={styles.accordionSection}>
      <div className={styles.container}>
        <div className={styles.title}>{qas.name}</div>
        {qas.items.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={styles.questionWrap}
                onClick={() => toggle(index)}
              >
                <h1 className={styles.question}>{item.question} </h1>
                <span className={styles.icon}>
                  {clicked === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              {clicked === index ? (
                <div className={styles.dropDown}>
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Qa;
