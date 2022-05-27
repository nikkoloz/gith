function RepoCard({ name, login }) {
  const url = "https://github.com/";
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url + "/" + login + "/" + name}
      >
        <h1>{name}</h1>
      </a>
    </div>
  );
}

export default RepoCard;
