import { mount } from "enzyme";
import PokemonTable from "./PokemonTable";

describe("PokemonTable", () => {
  it("Should match props and snapshot", () => {
    const component = mount(
      <PokemonTable
        {...{
          pokemonQuery: {
            pokemon: {
              __typename: "PokemonGQL",
              id: "test-pokemon-id",
              name: "test-pokemon-name",
              types: ["test-pokemon-type"],
              imageURL: "test-image-url",
            },
          },
        }}
      />
    );

    expect(component).toMatchSnapshot();
    expect(component.find("PokemonTable").prop("pokemonQuery")).toEqual({
      pokemon: {
        __typename: "PokemonGQL",
        id: "test-pokemon-id",
        name: "test-pokemon-name",
        types: ["test-pokemon-type"],
        imageURL: "test-image-url",
      },
    });
  });
});
