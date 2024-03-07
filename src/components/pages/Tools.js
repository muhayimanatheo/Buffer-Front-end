import img1 from "../../images/img1.png";
import img2 from "../../images/img2.jpg";
function ToolsFunc() {
  return (
    <main className="flex">
      <div className="w-1/2">
        <img src={img1} alt="img1" className="" />
      </div>
      <div className="mx-7">
        <p>publication open</p>
        <h1 className="font-bold text-4xl p-3">
          Trust, Transparency, and <br /> Curiosity: Batsirai Chada on
          <br /> Buffer's Unique Culture
        </h1>
        <p className="p-3">
          Batsirai Chada is a Growth Product Manager at Buffer, where he’s
          worked
          <br /> for about nine months. We spoke to him when he first joined to
          find out <br />
          about his journey to Buffer, how he works, and what he does outside of
          <br /> work.
        </p>

        <div className="flex">
          <span className="">
            <img
              src={img2}
              alt="img2"
              className="w-20 h-20 rounded-full border-indigo-600 border-4"
            />
          </span>
          <span className="mx-6 py-2">
            <ul>
              <li className="font-bold text-3xl">
                <a href="#/"> Tamilore Oladipo</a>
              </li>
            </ul>
            <p>Content Writer @ Buffer</p>
          </span>
        </div>
      </div>
    </main>
  );
}

export default ToolsFunc;
