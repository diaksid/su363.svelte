import cluster from 'cluster';
import { cpus } from 'os';
const numCPUs = cpus().length;

if (cluster.isPrimary) {
  cluster.on('online', (worker) =>
    console.log(`Worker ${worker.process.pid} [${worker.id}] responded`)
  );

  cluster.on('disconnect', (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });

  for (let i = 1; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  import('../build/index.js');
}
