import { mdiAccountGroup } from "@mdi/js";
import { useEffect, useState } from "react";
import { Person } from "../../sdk/models/Person";
import ScaleService from "../../sdk/services/Scale.service";
import ScaleCard from "../components/scale-card/ScaleCard";

export default function SingersFeature() {
  const [singers, setSingers] = useState<Person[]>();
  
  useEffect(() => {
    // TODO: usar redux aqui
    ScaleService.getScales().then(scales => {
      setSingers(scales[scales.length - 1].singers)
    })
  }, []);

  return (
    <ScaleCard
      position='even'
      header='Vocal'
      singersList={singers}
      isSvg={false}
      icon={mdiAccountGroup}
    ></ScaleCard>
  );
}
