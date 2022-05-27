function OrgCard({ avatar, login }) {
  let url = `https://github.com/`;

  return (
    <div>
      <h1> {login}</h1>
      <a target="_blank" rel="noopener noreferrer" href={url + login}>
        <img alt="alt" src={avatar} />
      </a>
    </div>
  );
}

export default OrgCard;
