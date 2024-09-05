import { For, Show } from "solid-js";
import { Card } from "./Card";

export function ListingCarousel(props) {
  return (
    <Show when={!!props.items?.length}>
      <div class="listing listing--carousel">
        <Show when={props.title || props.viewAllUrl}>
          <div class="listing__head">
            <Show when={props.title}>
              <h2 class="listing__title">{props.title}</h2>
            </Show>

            <Show when={props.viewAllUrl}>
              <a href={props.viewAllHref} class="listing__explore">
                <strong>Explore All</strong>
              </a>
            </Show>
          </div>
        </Show>

        <div class="carousel">
          <button
            class="carousel__nav carousel__nav--left"
            aria-label="Previous"
            type="button"
            // disabled="disableLeftButton"
            // click="moveToClickEvent('left')"
          >
            {/* <ChevronLeftIcon /> */}
          </button>

          <div class="carousel__items">
            <For each={props.items}>{item => <Card item={item} />}</For>

            <div class="card">
              <a href={props.viewAllHref} class="card__link">
                <div class="card__img">
                  <span>Explore All</span>
                </div>
              </a>
            </div>
          </div>

          <button
            class="carousel__nav carousel__nav--right"
            aria-label="Next"
            type="button"
            // disabled="disableRightButton"
            // click="moveToClickEvent('right')"
          >
            {/* <ChevronRightIcon /> */}
          </button>
        </div>
      </div>
    </Show>
  );
}
