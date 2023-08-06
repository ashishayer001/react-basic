import "./App.css";

function App() {
  return (
    <div className="main-div">
      <div className="sub-div">
        <p>Facebook</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png"
          style={{
            height: 200,
            width: 200,
          }}
          alt="facebook logo"
        />

        <a href="https://fb.com">Visit side</a>
        <p>
          Facebook is an online social media and social networking service owned
          by American technology giant Meta Platforms. Created in 2004 by Mark
          Zuckerberg with fellow Harvard College students and roommates Eduardo
          Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, its name
          derives from the face book directories often given to American
          university students.
        </p>
      </div>

      <div className="sub-div">
        <p>Instagram</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
          style={{
            height: 200,
            width: 200,
          }}
          alt="Instagram-logo"
        />

        <a href="https://instagram.com">Visit side</a>
        <p>
          Instagram is a photo and video sharing social networking service owned
          by American company Meta Platforms. The app allows users to upload
          media that can be edited with filters, be organized by hashtags, and
          be associated with a location — via geographical tagging. Posts can be
          shared publicly or with preapproved followers. Users can browse other
          users content by tags and locations, view trending content, like
          photos, and follow other users to add their content to a personal feed
        </p>
      </div>
      <div className="sub-div">
        <p>Tiktok</p>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAA/FBMVEUAAAD///8A8u7+KlMa7+wIGhpe8e38LlVdGifxlaX9F0r/KlZrGisNQkCA8O0A8vDzy9HxpbEA+/iZJDoIAAD/L1r/I1D0LlX57/P3ADzm/f3wADWvIj+8LEkNJyYA//8flZQLmpcAraqDy8qDAB+GGi8vDxbya4T0vMb79/r6O2H+AkTpL1T0SGhOFyLzwszyg5juGkjhF0qjK0VnUlVTd3Q7t7QAVFMAzMgUg4EKNDQJDw4T2NUnw8DW+vmn8/LRyc2zEDj22d8SYl/yXHnQpq/TEj/MKUkkDxI7ExrqcocTcW3F+PfrTW26PVhqx8SrwcG2jJa1TmR+ITPLg6KEAAAEmElEQVRoge2aa3fiNhCGLaxCsAgGB19gAw1uudphTbdd7tB40zoJobf9//+ltuwE+UKTBQudnuP3Y+LDc2Y0Gs2MxHGZMmXKlClTpkzUdBlS64zk7yRS39+cEw1zhKQ2O7R+ZjQsv+qHHzud7hnRefCqQQHJF2zQoCegEiN030AdRujBkL9mhAZVw2SFHtzyI0Zo8FG4YoUG1pgZerA7T4wnoIH2EzM00D4xQwPtZ2ZoMPiFGRqsP09qjNBgDaez+YIJGjSgJC312YRauXYYDUAZ5ryCbcUADdZ5KIo5JmjX65s8K7RH//WuU3pkggYVAck0DrP3oBUeZWhK6GqfGbpY79l00Iv5ZHuj63p7dnkALQj8k506evFFX8KXdvalpYyheV5QwvCT0N7x19JdbLybjaMLF9d8/b6v7dHCSVa3PhPct9Bc10FGfVesaClY3RYDsIhb2s3z+rffneboEJrjRk1ZEQRhfNuzrPsT0JPli8Uwv2kEu0hAuKU8gPbgKuJ5j6/wR6O3UPQthuX1K6Nq8P+N5rjHjqPKLp4/Gn3z4utygwjbd6BddUtXjqkWCsehZ5K3wDkxvwbgm9FYD4+j0cNxZBxd5XCa+Bb0kfriexs+g3Oj5/5oCq6jZOro2ko6QKaO3h7wNn10bYnRmwQybbQf3eHY1qq92+FwZz0pb2Szk1SDeFuRYHtXFxRPODvSQ2+l6EIXDYUPhBBN9MpzNzn/fBICrKyajmnK1NA1HGOE0ZZPRuanUdctHroXj7TQOJERv9rHZKR2Qi07FXTbRYv7jTVQvchCTqR7ooGu4aXen5NVbLQT/YwGerEM+/vWC+745JUGugVD/tYMl5ww4KeFzu3PjY+uv1Ez/hkN9NzLJ/ul9uK7kDBtjvZcqaHDWytpxk4LHd7VKOlmoZWjsdYi+Zu2e0gmzZonkkhlc5E9+zgZ7ZXKxGc9hT/9sslLKSTaEuQEdG0adriZBprTpRDaFpKsjib6D3waOXwbRoMnJR5m2GiijrHrqaAXErm53Hw2jG8uvykiOjF3C6onj+dq3JRMKZ5J4+gqbv0ucP/Jzk30ZgqTaLcqDJfB9h+RDzCZSPSev+OH2xGqxTqt0LXCXA+aov3/vUlKOnMqXYoO4xrT2SUuUloTHUrRpkhT+VSijMOHVyPCfs7B5Wq1mi5zQdcNiQah6B2sZjpXHm0p1nk8+8V5IJGslbHRac0FF0sYReNrhf1Eh/QKrpXltCbfk6SGq7HJwxyEMB8CBxVrQjVxpG7EOBrjXYX/YheUNI12pSf2mXENcNmYeKQfq8UqGuTJusfuVlMku/rzPTb3DNyapP0u5K83ydrOb4rSvzv++w1yRcW9b1KtfLL+iU32SWdbgk9O49yI6eHO0g6R+8Og921SujS+U4tJlmv9nW8yL9N7I/B1rPT6YdMHFWvoTzgQUr9SI3N4sj/eWdWKrWmaXekXe2o9sNhdZspvzEomUgTBqH9wZRjC60RHNs/wwuyiKSPEh4Rk50xP27odx3TxyKfKpnO253yeHkalq+tms3l9VTpqwp4pU6ZMmTJl+j/pX7zJfMYd67vzAAAAAElFTkSuQmCC"
          style={{
            height: 200,
            width: 200,
          }}
          alt="tiktok logo"
        />

        <a href="https://tiktok.com">Visit side</a>
        <p>
          TikTok, whose mainland Chinese counterpart is Douyin[3] (Chinese:
          抖音; pinyin: Dǒuyīn), is a short-form video hosting service owned by
          ByteDance.[4] It hosts user-submitted videos, which can range in
          duration from 3 seconds to 10 minutes
        </p>
      </div>
      <div className="sub-div">
        <p>X</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPup4ER7ThBmaYLFvZ5uEzkdaeU5109x3iVA&usqp=CAU"
          style={{
            height: 200,
            width: 200,
          }}
          alt="Twitter logo"
        />

        <a href="https:// twitter.com">Visit side</a>
        <p>
          On Twitter, users can post texts, images and videos known as tweets.
          Registered users can post, like, repost, comment and quote posts, and
          direct message other registered users. Users interact with Twitter
          through browser or mobile frontend software, or programmatically via
          its application programming interfaces (APIs).
        </p>
      </div>
    </div>
  );
}

export default App;
