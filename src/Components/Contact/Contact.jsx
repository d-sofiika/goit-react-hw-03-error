const Contact = ({name, number}) => {
  return (
    <li>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{number}</p>
      </div>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
