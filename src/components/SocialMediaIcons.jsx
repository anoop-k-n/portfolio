const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/anoop-k-n-a369a71a2/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/anoop.k_n/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/anoop-k-n"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={require("../assets/github4.png")} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
