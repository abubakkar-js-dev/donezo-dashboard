import { useEffect, useState } from 'react';
import { getOverview, getUsers, getAnalytics, getProducts } from '../api/dashboard';

export function useDashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getOverview(), getUsers(), getAnalytics(), getProducts()])
      .then(([overview, users, analytics, products]) => {
        setData({
          overview:  overview.data,
          users:     users.data,
          analytics: analytics.data,
          products:  products.data,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}