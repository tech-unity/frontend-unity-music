import { mdiAccountGroup } from "@mdi/js";
import { useEffect, useState } from "react";
import { Singers } from "../../sdk/models/Scale";
import ScaleService from "../../sdk/services/Scale.service";
import ScaleCard from "../components/scale-card/ScaleCard";

export default function SingersFeature() {
  const [singers, setSingers] = useState<Singers[]>();
  
  useEffect(() => {
    const scale = ScaleService.getScales()
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
