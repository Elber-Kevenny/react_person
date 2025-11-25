export const Person = ({ person }) => (
  <div>
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age != null && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">
        {!person.isMarried && `not married`}
        {person.sex === 'f' && `${person.partnerName} is my husband`}
        {person.sex === 'm' && `${person.partnerName} is my wife`}
      </p>
    </section>
  </div>
);
