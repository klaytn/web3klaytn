from base.testing import KlaytnBaseTesting


class TestAdminStateMigrationStatus(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.state_migration_status()
        self.assertResponseSuccess()
