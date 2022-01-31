import http from "http";
import axios from "axios";
import { Logger } from "tslog";

export const setupPrivateAggregator = async (
  log: Logger,
  urls: string[],
  port: number,
): Promise<boolean> => {
  const network: boolean = await new Promise(() => {
    http
      .createServer(async (req, res) => {
        const buffers = [];

        res.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        });

        if (req.method !== "POST") {
          log.warn("[Network Aggregator]: Request method not POST.");
          res.end();
          return;
        }

        for await (const chunk of req) {
          buffers.push(chunk);
        }

        const data = Buffer.concat(buffers).toString();

        const source = new AbortController();

        try {
          const _req = await Promise.any(
            urls.map(async (s) => {
              const _res = await axios({
                method: "POST",
                timeout: 5000,
                url: s,
                headers: {
                  "Content-Type": "application/json",
                },
                data,
                signal: source.signal,
              });

              if (_res.data.error) {
                throw log.warn("[Network Aggregator]: Request failed.");
              }

              source.abort();

              return JSON.stringify(_res.data);
            }),
          );

          res.end(_req);
        } catch (e) {
          log.warn(e);
          log.warn("[Network Aggregator]: All requests failed.");
          res.end();
        }
      })
      .listen(port);

    log.info("[Network Aggregator]: Aggregator started.");
    Promise.resolve(true);
  });

  console.log(network);

  return network;
};
