import HOC from "../component/HOC";
import Perjalanan1 from "./../Img/Perjalanan1.png";
import Perjalanan2 from "./../Img/Perjalanan2.png";
import Perjalanan3 from "./../Img/Perjalanan3.png";
import Perjalanan4 from "./../Img/Perjalanan4.png";
import { Button } from "react-bootstrap";
import { HOME, PENGELOLAAN } from "../routes";
import Bg1 from "./../Img/gambar1.png";
import Footer1 from "../component/Footer1";
import "./../style/Style.css";

const Perjalanan = () => {
  return (
    <HOC HeaderTitle="Perjalanan Sampah">
      <section className="activity" style={{ marginBottom: "30px" }}>
        <img src={Perjalanan1} alt="G2" />
        <div className="col-4 ">
          <p
            className=""
            style={{
              marginLeft: "0px",
              marginBottom: "50px",
              marginTop: "-50px",
            }}
          >
            <a
              class="text-muted"
              href={HOME}
              style={{ textUnderlinePosition: "none" }}
            >
              Home -
            </a>
            <a
              class="text-muted"
              href={PENGELOLAAN}
              style={{ textUnderlinePosition: "none" }}
            >
              Pengelolaan Limbah
            </a>
            - Jenis Sampah
          </p>
          <h2 style={{ paddingBottom: "20px" }}>Kemana Sampahmu?</h2>
          <p style={{ textAlign: "justify", width: "534px" }}>
            Pernahkah kamu bertanya-tanya kemana sampahmu berakhir? Setelah kamu
            membuangnya di tempat sampah, satu hal yang kamu tahu adalah bahwa
            sampah itu akan hilang ketika pengumpul sampah datang. Lalu, apa
            yang terjadi kepada sampahmu setelah itu?. Sebenarnya ada proses
            yang rumit di balik pengumpulan sampah. Setelah sampah dikumpulkan,
            menjadi tanggung jawab manajemen kawasan untuk mengelola sampah
            sehingga sampah diproses sebaik-baiknya.
          </p>
          <br />
          <Button
            variant="success"
            style={{
              width: "168px",
              height: "48px",
              background: "#18A637",
              padding: "10px",
              borderRadius: "8px",
              fontSize: "16px",
              textAlign: "center",
            }}
            href="#Next"
          >
            Lihat Selengkapnya
          </Button>
          <br />
          <br />
        </div>
      </section>
      <section className="jumbotron2" id="Next">
        <div style={{ height: "169px", color: "#EFF7F2", textAlign: "center" }}>
          <h1 style={{ paddingTop: "50px" }}>Perjalanan Sampahmu</h1>
        </div>
      </section>
      <section className="jenis-sampah-kedua">
        <img src={Perjalanan2} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "200px" }}>1. Pusat Daur Ulang</h2>
          <p
            className="sampah"
            style={{ marginLeft: "200px", marginTop: "50px" }}
          >
            Sampah anorganik sekarang disortir dari sampah lainnya dan akan
            dipisahkan sekali lagi untuk setiap kategori bahan. Kertas, logam
            dan plastik biasanya merupakan kategori penyortiran untuk didaur
            ulang. Sampah daur ulang akan menjadi bahan baku yang tepat dari
            produk itu sendiri. Bahan ini bisa dijual ke produsen untuk membuat
            ulang produk masing-masing dari bahan daur ulang. Di Indonesia,
            banyak sektor informal mengandalkan bisnis daur ulang ini.
          </p>
        </div>
      </section>
      <section className="jenis-sampah">
        <img src={Perjalanan3} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "0px", textAlign: "left" }}>
            2. Fasilitas Pengomposan
          </h2>
          <p
            className="sampah"
            style={{
              marginleft: "200px",
              marginTop: "50px",
              marginRight: "200px",
            }}
          >
            Sampah organik bisa dikomposkan menjadi pupuk. Pupuk organik yang
            baik dihasilkan dari sampah organik yang disortir dan diolah dengan
            baik. Mudah sekali mengomposkan sampah organik menjadi pupuk,
            praktik ini telah dilakukan berabad-abad namun perlu dilakukan
            pemilahan khusus dari sampah itu sendiri. Untuk prosesnya, ada
            banyak jenisnya: dari open-windrow dengan menggunakan kerja bakteri
            aerobik hingga menggunakan organisme seperti cacing tanah atau Black
            soldier fly.
          </p>
        </div>
      </section>
      <section className="jenis-sampah-kedua" style={{ marginBottom: "100px" }}>
        <img src={Perjalanan4} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "200px" }}>3. TPA</h2>
          <p
            className="sampah"
            style={{ marginLeft: "200px", marginTop: "50px" }}
          >
            Beberapa sampah yang tidak bisa didaur ulang atau dikomposkan bisa
            dibawa ke TPA untuk penyimpanan jangka panjang. TPA adalah tempat
            pembuangan terakhir dari sampah. Kita tidak ingin sampah kita berada
            di lingkungan seperti laut. Karena itulah TPA dibangun, tempat
            pembuangan sampah mencegah polusi yang tidak diinginkan.
          </p>
        </div>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default Perjalanan;
