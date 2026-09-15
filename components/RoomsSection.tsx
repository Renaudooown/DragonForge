import { rooms } from "@/data/rooms";

export function RoomsSection() {
  return (
    <section
      id="rooms"
      className="scroll-mt-16 border-y border-ink/10 bg-ivory-2 px-5 py-12 sm:px-10 sm:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
          {rooms.title}
          <span className="text-forge">.</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-soft sm:text-xl">
          {rooms.subtitle}
        </p>

        <div className="mt-12 space-y-14">
          {rooms.buildings.map((building) => (
            <div key={building.name}>
              <h3 className="font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
                {building.name}
              </h3>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                {building.rooms.map((room) => (
                  <li
                    key={room.name}
                    className="grid gap-2 py-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:items-baseline sm:gap-8"
                  >
                    <p className="text-[0.8rem] uppercase tracking-[0.22em] text-forge">
                      {room.name}
                    </p>
                    <p className="font-display text-2xl leading-tight text-ink sm:text-[1.85rem]">
                      {room.occupants.join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
