import Contact from "../Contact/Contact"
import css from "./contactList.module.css"

const ContactList = ({list}) => {
    return (
      <ul className={css.contactList}>
      {list.map((person) => (
          <Contact 
          key={person.id} 
          name={person.name} 
          number={person.number}
        />
      ))}
    </ul>
      
  )
}

export default ContactList