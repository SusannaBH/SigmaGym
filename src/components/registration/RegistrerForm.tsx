import styles from './styles.module.css'

export default function RegistrerForm () {
  return (
    <div className={styles.containerReg}>
      <h1>- REGISTRATION -</h1>
      <form className={styles.formReg}>
        <label>Name</label>
        <input type="text" style={{ maxWidth: 200 }} required />
        <label>Surname</label>
        <input type="text" style={{ maxWidth: 200 }} />
        <label>Username</label>
        <input type="text" style={{ maxWidth: 200 }} required />
        <label>Password</label>
        <input type="password" style={{ maxWidth: 200 }} required />
        <label>Repeat Password</label>
        <input type="password" style={{ maxWidth: 200 }} required />
        <label>Address</label>
        <input type="text" style={{ maxWidth: 200 }} />
        <label htmlFor="opcions">Type</label>
        <select>
          <option value="opcion1">Cliente</option>
          <option value="opcion2">Trabajador</option>
        </select>
      </form>
    </div>
  );
}
