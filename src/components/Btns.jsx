import React from "react";
import Key from "./Key";

export default function Btns() {
  return (
    <div className=" btns d-flex gap-3">
      <Key dataKey={65} letter={"a"} sound={"clap"} />
      <Key dataKey={83} letter={"s"} sound={"hihat"} />
      <Key dataKey={68} letter={"d"} sound={"kick"} />
      <Key dataKey={70} letter={"f"} sound={"openhat"} />
      <Key dataKey={71} letter={"g"} sound={"boom"} />
      <Key dataKey={72} letter={"h"} sound={"ride"} />
      <Key dataKey={74} letter={"j"} sound={"snare"} />
      <Key dataKey={75} letter={"k"} sound={"tom"} />
      <Key dataKey={76} letter={"l"} sound={"tink"} />
    </div>
  );
}
