import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {

  function getStatSortValue(i: string): number {
    if (i === 'N/A') {
      return -1;
    }

    if (i.includes('%')) {
      const num_string = i.replaceAll('%', '');
      return Number(num_string);
    } else {
      console.error('Error, received string which cannot be sorted', i);
      return -2;
    }
  }

  function compareStats(a: string, b: string): number {
    let aSortValue = getStatSortValue(a);
    let bSortValue = getStatSortValue(b);
    if (aSortValue > bSortValue) {
      return 1;
    } else if (bSortValue > aSortValue) {
      return -1;
    }
    return 0;
  }

  const gameTablesClasses = {
    table: "w-full"
  };
  const gamesColumns = [
    {
      name: 'Name'
    },
    {
      name: 'Top',
      sort: {
        compare: compareStats
      }
    },
    {
      name: 'Jungle',
      sort: {
        compare: compareStats
      }
    },
    {
      name: 'Mid',
      sort: {
        compare: compareStats
      }
    },
    {
      name: 'Bot',
      sort: {
        compare: compareStats
      }
    },
    {
      name: 'Support',
      sort: {
        compare: compareStats
      }
    }
  ];

  return {
    ... data,
    gamesColumns: gamesColumns,
    gameTablesClasses: gameTablesClasses

  }
};