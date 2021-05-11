export interface FullRestaurant {
  id: string;
  name: string;
  count_tables: string;
  count_waiters: string;
  waiters_working: string,
}

export interface Restaurant {
  id?: string;
  name?: string;
  id_owner?: string;
}
