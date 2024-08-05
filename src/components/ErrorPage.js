const ErrorPage = ({ error }) => {
  return (
    <section
      style={{
        background: 'rgb(202, 202, 215)',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(94 94 101)',
      }}>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div
          style={{
            padding: '12px',
            borderRight: '6px solid rgb(94 94 101)',
            fontSize: 'xx-large',
            fontWeight: 'bold',
          }}>
          {error.name}
        </div>
        <div
          style={{
            marginLeft: '10px',
            fontSize: 'x-large',
          }}>
          {error.code}
        </div>
      </section>
      <br />
      <div
        style={{
          fontSize: 'x-large',
        }}>
        {error.message}
      </div>
    </section>
  );
};
export default ErrorPage;
