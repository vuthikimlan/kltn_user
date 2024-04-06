import { Key } from "react";

function Topic({ dataTopic }: any) {
  return (
    <div>
      <p className="border-[1px] border-solid border-[#e4e8eb] p-[10px] text-center font-semibold ">
        {dataTopic.nameTopic}{" "}
      </p>
    </div>
  );
}

export default Topic;
