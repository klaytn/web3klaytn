from base.testing import KlaytnBaseTesting


class TestAdminStopStateMigration(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.stop_state_migration()
        self.assertResponseSuccess()
