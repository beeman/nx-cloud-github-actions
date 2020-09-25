import { ApiFeatureAuthModule } from '@nx-cloud-github-actions/api/feature-auth'
import { ApiFeatureCoreModule } from '@nx-cloud-github-actions/api/feature-core'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule],
})
export class AppModule {}
