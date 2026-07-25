dependencyResolutionManagement {
  repositories {
    exclusiveContent {
      forRepository {
        maven {
          name = "axisVertexPreview"
          url = uri("https://vertex-packages.chaosguide.com/releases/0.1.0/maven")
        }
      }
      filter { includeGroup("com.chaosguide.iam") }
    }
    mavenCentral()
  }
}

rootProject.name = "axis-vertex-public-java-consumer"
