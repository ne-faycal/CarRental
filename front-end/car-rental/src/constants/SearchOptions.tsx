import React from "react";

const Searchbox = () => {
  return (
    <div className="bg-white shadow-lg rounded-full  px-8 py-6 flex flex-wrap  items-center justify-between w-full sm:w-1/2 max-w-5xl  mx-auto mt-16 ">
      <div className="flex flex-col pl-5">
        <label className="">Pick up location</label>
        <select  name="yawidi" className="text-black focus:outline-none sm:flex-row sm:items-end">
          <option value="">Select Wilaya</option>
          <option value="adrar">Adrar</option>
          <option value="chlef">Chlef</option>
          <option value="laghouat">Laghouat</option>
          <option value="oum-el-bouaghi">Oum El Bouaghi</option>
          <option value="batna">Batna</option>
          <option value="bejaia">Béjaïa</option>
          <option value="biskra">Biskra</option>
          <option value="bechar">Béchar</option>
          <option value="blida">Blida</option>
          <option value="bouira">Bouira</option>
          <option value="tamanrasset">Tamanrasset</option>
          <option value="tebessa">Tébessa</option>
          <option value="tlemcen">Tlemcen</option>
          <option value="tiaret">Tiaret</option>
          <option value="tizi-ouzou">Tizi Ouzou</option>
          <option value="alger">Alger</option>
          <option value="djelfa">Djelfa</option>
          <option value="jijel">Jijel</option>
          <option value="setif">Sétif</option>
          <option value="saida">Saïda</option>
          <option value="skikda">Skikda</option>
          <option value="sidi-bel-abbes">Sidi Bel Abbès</option>
          <option value="annaba">Annaba</option>
          <option value="guelma">Guelma</option>
          <option value="constantine">Constantine</option>
          <option value="medea">Médéa</option>
          <option value="mostaganem">Mostaganem</option>
          <option value="msila">M’Sila</option>
          <option value="mascara">Mascara</option>
          <option value="ouargla">Ouargla</option>
          <option value="oran">Oran</option>
          <option value="el-bayadh">El Bayadh</option>
          <option value="illizi">Illizi</option>
          <option value="bordj-bou-arreridj">Bordj Bou Arreridj</option>
          <option value="boumerdes">Boumerdès</option>
          <option value="el-tarf">El Tarf</option>
          <option value="tindouf">Tindouf</option>
          <option value="tissemsilt">Tissemsilt</option>
          <option value="el-oued">El Oued</option>
          <option value="khenchela">Khenchela</option>
          <option value="souq-ahras">Souk Ahras</option>
          <option value="tipaza">Tipaza</option>
          <option value="mila">Mila</option>
          <option value="ain-defla">Aïn Defla</option>
          <option value="naama">Naâma</option>
          <option value="ain-temouchent">Aïn Témouchent</option>
          <option value="ghardaia">Ghardaïa</option>
          <option value="relizane">Relizane</option>
          <option value="timimoun">Timimoun</option>
          <option value="bordj-baji-mokhtar">Bordj Badji Mokhtar</option>
          <option value="ouled-djellal">Ouled Djellal</option>
          <option value="beni-abbes">Béni Abbès</option>
          <option value="in-salah">In Salah</option>
          <option value="in-guezzam">In Guezzam</option>
          <option value="touggourt">Touggourt</option>
          <option value="djanet">Djanet</option>
          <option value="el-mghair">El M’Ghair</option>
          <option value="el-meniah">El Meniaa</option>
          <option value="">relizane</option>
        </select>
      </div>
      <div>
        <label className=" text-black flex flex-col">Pick up date</label>
        <input type="date" placeholder="yyyy-mm-dd" className="" />
      </div>
      <div>
        <label className="text-black flex flex-col">Return up date</label>
        <input type="date" placeholder="yyyy-mm-dd" className="" />
      </div>
      <button className="bg-[#3B82F6] font-medium text-white py-2 px-7 rounded-full">
        Search
      </button>
    </div>
  );
};

export default Searchbox;
