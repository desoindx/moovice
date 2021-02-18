// Functional component
// Composant en forme de fonction


const User = ({nom, prenom}) => {
    // Hooks
  return (
    <>
      <h1>{prenom}</h1>
      <h2>{nom}</h2>
    </>
  );
};

export default User;