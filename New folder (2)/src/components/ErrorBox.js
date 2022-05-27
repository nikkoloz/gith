function ErrorBox({ children }) {
  return (
    <div className="error-box">
      <h1>Error messages:</h1>
      {children}
    </div>
  );
}

export default ErrorBox;
