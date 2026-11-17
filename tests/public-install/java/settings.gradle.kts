dependencyResolutionManagement {
  repositories {
    exclusiveContent {
      forRepository { mavenLocal() }
      filter { includeGroup("com.chaosguide.iam") }
    }
    mavenCentral()
  }
}

rootProject.name = "axis-vertex-source-java-consumer"
