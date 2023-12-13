import { ResolveOptions } from "webpack";


export function buildResolwe():ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
      }
}