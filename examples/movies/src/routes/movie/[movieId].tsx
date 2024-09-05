import { Show, createResource, createSignal } from "solid-js";
import Hero from "~/components/Hero";
import styles from "./[movieId].module.scss";
import { getMovie } from "~/services/tmdbAPI";
import { RouteSectionProps, useParams } from "@solidjs/router";

export default function MoviePage(props: RouteSectionProps) {
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
    <main>
      <Show when={data()}>
        <Hero item={data()?.item} />
      </Show>
      <div class={`spacing ${styles.nav}`}>
        <a
          href={`/movie/${useParams().movieId}`}
          active-class={styles.buttonActive}
          class={styles.button}
        >
          Overview
        </a>
        <a
          href={`/movie/${useParams().movieId}/videos`}
          active-class={styles.buttonActive}
          class={styles.button}
        >
          Videos
        </a>
        <a
          href={`/movie/${useParams().movieId}/photos`}
          active-class={styles.buttonActive}
          class={styles.button}
        >
          Photos
        </a>
      </div>
      {props.children}
    </main>
  );
}
