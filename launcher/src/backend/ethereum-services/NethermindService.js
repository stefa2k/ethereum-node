import { NodeService } from "./NodeService";
import { ServiceVolume } from "./ServiceVolume";

export class NethermindService extends NodeService {
    static buildByUserInput (network, ports, dir){
        const service = new NethermindService()
        service.setId()
        const workingDir = service.buildWorkingDir(dir)
        const dataDir = '/opt/app/data'
        const JWTDir = '/engine.jwt'

        const volumes = [
            new ServiceVolume(workingDir + '/data',dataDir),
            new ServiceVolume(workingDir + '/engine.jwt', JWTDir)
        ]

        service.init(
            'NethermindService',    // service
            service.id,             // id
            1,                      // configVersion
            'nethermind/nethermind',// image
            '1.13.5',               // imageVersion
            [
                `--config=${network}`,
                '--log=info',
                `--datadir=${dataDir}`,
                '--Network.DiscoveryPort=30303',
                '--Network.P2PPort=30303',
                '--JsonRpc.Enabled=true',
                '--JsonRpc.JwtSecretFile=/engine.jwt',
                '--JsonRpc.Host=0.0.0.0',
                '--Init.WebSocketsEnabled=true',
                '--JsonRpc.WebSocketsPort=8546',
                '--JsonRpc.EnabledModules=[web3,eth,subscribe,net]',
                '--Metrics.Enabled=true',
                '--Metrics.ExposePort=6060'
            ],                      // command
            ["./Nethermind.Runner"],// entrypoint
            null,                   // env
            ports,                  // ports
            volumes,                // volumes
            'root',                   // user
            network,                // network
            // executionClients
            // consensusClients
        )
    return service
    }


  static buildByConfiguration (config) {
    const service = new NethermindService()

    service.initByConfig(config)

    return service
  }

  buildExecutionClientHttpEndpointUrl () {
    return 'http://stereum-' + this.id + ':8551'
  }

  buildExecutionClientWsEndpointUrl () {
    return 'ws://stereum-' + this.id + ':8551'
  }

  buildExecutionClientMetricsEndpoint () {
    return 'stereum-' + this.id + ':6060'
  }

  buildPrometheusJob () {
    return `\n  - job_name: stereum-${this.id}\n    static_configs:\n      - targets: [${this.buildExecutionClientMetricsEndpoint()}]`
  }
}