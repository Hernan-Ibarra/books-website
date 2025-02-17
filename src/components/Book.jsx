export function Book({
  author,
  country,
  imageLink,
  language,
  link,
  pages,
  title,
  year,
  read,
}) {
  return (
    <div className="book">
      <h2>
        <a href={link}>{title}</a>
      </h2>
      <h3>{author}</h3>
      <img className="book-covers" src={"/src/assets/".concat(imageLink)} />
      <table>
        <tbody>
          <tr>
            <th>Year:</th>
            <td>{year}</td>
          </tr>
          <tr>
            <th>Language:</th>
            <td>{language}</td>
          </tr>
          <tr>
            <th>Country:</th>
            <td>{country}</td>
          </tr>
          <tr>
            <th>Pages:</th>
            <td>{pages}</td>
          </tr>
          <tr>
            <th>Read?</th>
            <td>
              <input type="checkbox" defaultChecked={read} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
