import { Show, createResource } from "solid-js";
import { Credits } from "./Credits";
import { MovieInfo } from "./MovieInfo";
import { useParams } from "@solidjs/router";
import { getMovie } from "~/services/tmdbAPI";

export default function MoviePage() {
  const params = useParams();
  const [data] = createResource(params.movieId, async (id: string) => {
    try {
      const item = await getMovie(id);

      if (item.adult) {
        throw new Error("Data not available");
      } else {
        return { item };
      }
    } catch {
      throw new Error("Data not available");
    }
  });
  return (
    <Show when={data()}>
      <MovieInfo item={data()?.item} />
      <Show when={data()?.item?.credits?.cast?.length}>
        <Credits people={data()?.item?.credits?.cast} />
      </Show>
    </Show>
  );
}
