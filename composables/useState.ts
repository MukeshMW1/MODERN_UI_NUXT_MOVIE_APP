
// export const useSelectedColors =()=> useState('selected-colors',()=>'');
// export const useAvailableColors= ()=>useState('availabe-colors',()=>[

//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'blue'

// ])
// useAvailableColors






// composables/useState.ts
export const useMovieStore = () => useState('movies', () => ({
    favorites: [],
    searchHistory: [],
    filters: {
      genre: null,
      year: null,
      rating: null
    }
  }))
  